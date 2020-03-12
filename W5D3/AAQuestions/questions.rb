require_relative 'questions_db'

class User
  def self.find_by_id(id)
    user_by_id = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT 
        * 
      FROM 
        users 
      WHERE 
        id = ?
    SQL
    User.new(*user_by_id)
  end
  
  attr_accessor :id, :fname, :lname

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end
  
  def self.find_by_name(fname, lname)
    data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT
        * 
      FROM
        users
      WHERE
        fname = ? AND lname = ?
    SQL
    data.map { |datum| User.new(datum) }
  end

  def authored_questions
    Question.find_by_author_id(self.id)
  end
  
  def authored_replies
    Reply.find_by_user_id(self.id)
  end
end

class Question

  def self.find_by_id(id)
    question = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL
    Question.new(*question)
  end

  attr_accessor :id, :title, :body, :author_id

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def self.find_by_author_id(author_id)
    question_by_author = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT 
        *
      FROM
        questions
      WHERE
        author_id = ?
    SQL

    question_by_author.map {|datum| Question.new(datum)}
  end

  def author
    User.find_by_id(self.author_id)
  end

  def replies
    Reply.find_by_user_id(self.author_id)
  end
end

class QuestionFollow

  def self.find_by_id(id)
    question_follow = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_follows
      WHERE
        id = ?
    SQL
    QuestionFollow.new(*question_follow)
  end

  attr_accessor :id, :question_id, :user_id

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end
end

class Reply

  def self.find_by_id(id)
    reply = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL
    Reply.new(*reply)
  end

  attr_accessor :id, :question_id, :parent_reply_id, :user_id, :body

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @user_id = options['user_id']
    @body = options['body']
  end

  def self.find_by_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT 
        *
      FROM
        replies
      WHERE
        user_id = ?
    SQL
    data.map {|datum| Reply.new(datum)}
  end
  
  def self.find_by_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
    SELECT 
      *
    FROM
      replies
    WHERE
      question_id = ?
    SQL
    data.map {|datum| Reply.new(datum)}
  end

  def author
    User.find_by_id(self.user_id)
  end

  def question
    Question.find_by_id(self.question_id)
  end

  def parent_reply
    Reply.find_by_id(self.parent_reply_id)
  end

  def child_replies
    data = QuestionsDatabase.instance.execute(<<-SQL, self.id)
    SELECT
      *
    FROM
      replies
    WHERE
      parent_reply_id = ?
    SQL
    data.map {|datum| Reply.new(datum)}
  end
end

class QuestionLike

  def self.find_by_id(id)
    like = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions_likes
      WHERE
        id = ?
    SQL
    QuestionLike.new(like)
  end

  attr_accessor :id, :user_id, :question_id

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end
end