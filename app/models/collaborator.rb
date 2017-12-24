class Collaborator < ApplicationRecord
  belongs_to :project, inverse_of: :collaborators
end
