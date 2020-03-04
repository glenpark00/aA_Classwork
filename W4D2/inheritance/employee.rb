class Employee
  attr_reader :salary, :employees

  def initialize(name, salary, title, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
    @employees = []
  end

  def bonus(multiplier)
    @salary * multiplier
  end

  def sum_all_sal
    return @salary if self.employees.empty?

    sum = @salary
    employees.each do |employee|
      sum += employee.sum_all_sal
    end
    sum
  end
end