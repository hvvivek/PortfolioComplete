module ApplicationHelper
    def link_to_add_collaborators(name, f, association)
        new_object = f.object.send(association).klass.new
        id = new_object.object_id
        fields = f.fields_for(association, new_object, child_index: id) do |builder|
          render(association.to_s.singularize + "_fields", f: builder)
        end
        link_to(name, '#', class: "col-4 add_fields", data: {id: id, fields: fields.gsub("\n", "")})
      end

      def tag_cloud(tags, classes)
        max = tags.sort_by(&:count).last
        tags.each do |tag|
          index = tag.count.to_f / Integer(max.count) * (classes.size - 1)
          yield(tag, classes[index.round])
        end
      end
end
