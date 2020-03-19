require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    table ||= DBConnection.execute2(<<-SQL)
      SELECT 
        *
      FROM 
        #{table_name}
    SQL
    @columns = table[0].map(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |column|
      define_method("#{column}") { attributes[column] }

      define_method("#{column}=") { |value| attributes[column] = value }
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name

  end

  def self.table_name
    @table_name ||= self.to_s.downcase.tableize
  end

  def self.all
    all = DBConnection.execute(<<-SQL)
      SELECT
        #{table_name}.*
      FROM
        #{table_name}    
    SQL

    self.parse_all(all)

  end

  def self.parse_all(results)
    res = []
    results.each do |hash|
      sim_hash = {}
      hash.each{|k,v| sim_hash[k.to_sym] = v}
      res << self.new(sim_hash)
    end
    res
  end

  def self.find(id)
    inst = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        #{table_name}
      WHERE
        id = ?
      LIMIT 1
    SQL
    return nil if inst.empty?
    sim_hash = {}
    inst[0].each{|k,v| sim_hash[k.to_sym] = v}
    self.new(sim_hash)
  end

  def initialize(params = {})
    params.each do |name, val|
      if !self.class.columns.include?(name)
        raise "unknown attribute '#{name}'"
      end
      self.send("#{name}=", val)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    @attributes.values
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
