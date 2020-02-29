class PolyTreeNode
    
    attr_reader :parent, :value, :children

    def initialize(value)
        @parent = nil
        @value = value
        @children = []
    end

    def inspect
        @value.inspect
    end

    def parent=(parent_node)
        if !@parent.nil?
            @parent.children.delete(self) #removing itself as its old parent's child
        end
        @parent = parent_node
        if @parent != nil
            @parent.children << self
        end
    end

    def add_child(child_node)
        child_node.parent=(self)
    end

    def remove_child(child_node)
        raise "Not a child" if child_node.parent == nil
        child_node.parent=(nil)
    end

    def dfs(target_value)
        return nil if self == nil
        return self if self.value == target_value

        self.children.each do |child| 
            result = child.dfs(target_value) 
            return result if !result.nil? # we need this condition bc otherwise the method will return after the first leaf is reached
        end 
        nil
    end
                                                        
    def bfs(target_value)
        q = [self]
        until q.empty?
            node = q.shift
            return node if node.value == target_value
            q += node.children
       end
       nil
    end
end