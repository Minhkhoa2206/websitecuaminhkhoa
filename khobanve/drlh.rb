require 'sketchup.rb'

module ThemeSwitcher
  def self.is_dark_theme?
    Sketchup.active_model.options['GUISettings']['Theme'] == 1
  end

  def self.toggle_theme(new_theme)
    Sketchup.active_model.options['GUISettings']['Theme'] = new_theme
    UI.messagebox("Switched to #{new_theme.capitalize} Theme")
  end

  def self.create_theme_switcher_dialog
    dialog = UI::HtmlDialog.new(
      {
        :dialog_title => "Theme Switcher",
        :preferences_key => "com.example.theme_switcher",
        :scrollable => true,
        :resizable => false,
        :width => 200,
        :height => 100,
        :style => UI::HtmlDialog::STYLE_DIALOG
      }
    )

    dark_button = '<button onclick="sketchup_callback(\'dark\')">Dark</button>'
    light_button = '<button onclick="sketchup_callback(\'light\')">Light</button>'
    html = "<html><body style='text-align:center;'>#{dark_button} #{light_button}</body></html>"

    dialog.set_html(html)

    dialog.add_action_callback("sketchup_callback") do |_, arg|
      new_theme = arg == 'dark' ? (is_dark_theme? ? 'Light' : 'Dark') : (is_dark_theme? ? 'Dark' : 'Light')
      toggle_theme(new_theme)
      dialog.close
    end

    dialog.show
  end

  unless file_loaded?(__FILE__)
    menu = UI.menu('Plugins').add_item('Theme Switcher') {
      create_theme_switcher_dialog
    }
    file_loaded(__FILE__)
  end
end
