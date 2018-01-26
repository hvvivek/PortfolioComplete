class Project < ApplicationRecord
    has_many :collaborators, inverse_of: :project, dependent: :destroy
    has_many :instructors, inverse_of: :project, dependent: :destroy
    has_many :media,->{ order( :order)}, inverse_of: :project, dependent: :destroy
    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings, dependent: :destroy

    accepts_nested_attributes_for :collaborators, allow_destroy: true
    accepts_nested_attributes_for :instructors, allow_destroy: true
    accepts_nested_attributes_for :media, allow_destroy: true

    def self.tagged_with(name)
        Tag.find_by!(name: name).projects
    end
    
    # def self.tag_counts
    #     Tag.select('tags.*, count(taggings.tag_id) as count').joins(:taggings).group('taggings.tag_id')
    # end
    def self.tag_counts
        Tag.select("tags.id, tags.name,count(taggings.tag_id) as count").
        joins(:taggings).group("taggings.tag_id, tags.id, tags.name")
    end  

    def tag_list
        tags.map(&:name).join(', ')
    end
    
    def tag_list=(names)
        self.tags = names.split(',').map do |n|
            Tag.where(name: n.strip).first_or_create!
        end
    end
end
