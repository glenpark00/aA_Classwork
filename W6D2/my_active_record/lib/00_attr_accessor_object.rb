class AttrAccessorObject
  def self.my_attr_accessor(*names)
  #   define_method(:my_attr_accessor) do |name| 
  #     name.each_with_index do |x, y| 
  #       instance_variable_set(":@#{x}") 
  #       instance_variable_get(":@#{y}")
  #     end
  #   end
    names.each do |name|
      define_method("#{name}"){instance_variable_get("@#{name}")}

      define_method("#{name}=") { |value| instance_variable_set("@#{name}", value)}
    end

    
  end
end
