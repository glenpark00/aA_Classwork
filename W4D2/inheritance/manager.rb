require_relative 'employee'

class Manager < Employee
  attr_reader :employees

  def initialize(name, salary, title, boss)
    super
    @employees = []
  end

  def bonus(multiplier)
    # sum = employees.inject(0) { |acc, el| acc + el.salary }
    # sum * multiplier
    (self.sum_all_sal - @salary) * multiplier
    
  end
end

rob = Manager.new('Rob', 10000000, 'King', nil)
ned = Manager.new('Ned', 1000000, 'Founder', 'Rob')
darren = Manager.new('Darren', 78000, 'TA Manager', 'Ned')
shawna = Employee.new('Shawna',	12000, 'TA', 'Darren')
david = Employee.new('David', 10000, 'TA', 'Darren')

darren.employees.push(shawna, david)
ned.employees.push(darren)
rob.employees.push(ned)

p rob.bonus(1)
p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000