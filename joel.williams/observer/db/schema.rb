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

ActiveRecord::Schema.define(version: 2020_07_26_163457) do

  create_table "lamps", force: :cascade do |t|
    t.boolean "on", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "observers", force: :cascade do |t|
    t.string "observerType"
    t.integer "observerId"
    t.string "subjectType"
    t.integer "subjectId"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string "type", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "switches", force: :cascade do |t|
    t.boolean "on", default: false
    t.string "type", default: "Switch"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
