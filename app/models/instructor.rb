class Instructor < ApplicationRecord
  belongs_to :project, inverse_of: :instructors
end
