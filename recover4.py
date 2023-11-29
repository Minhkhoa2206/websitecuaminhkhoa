def convert_to_js():
    with open('output.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()

    with open('data3.js', 'w', encoding='utf-8') as file:
        file.write('var data = [\n')
        for line in lines:
            # Escape any single quotes in the line to avoid breaking the JavaScript string
            line = line.replace("'", "\\'")
            file.write(f"    '{line.strip()}',\n")
        file.write('];\n')

convert_to_js()
