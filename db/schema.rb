# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171224152343) do

  create_table "collaborators", force: :cascade do |t|
    t.string "name"
    t.string "link"
    t.string "contact"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_collaborators_on_project_id"
  end

  create_table "instructors", force: :cascade do |t|
    t.string "name"
    t.string "link"
    t.string "contact"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_instructors_on_project_id"
  end

  create_table "media", force: :cascade do |t|
    t.string "caption"
    t.string "link"
    t.string "credits"
    t.string "mediatype"
    t.integer "order"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_media_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "thumb_img"
    t.string "thumb_vid"
    t.text "short_desc"
    t.string "location"
    t.string "period"
    t.date "date"
    t.text "long_desc"
    t.text "recognition"
    t.text "role"
    t.integer "views"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "tag_id"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_taggings_on_project_id"
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
