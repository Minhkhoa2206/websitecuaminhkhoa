def process_file():
    with open('data.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()

    output = []
    for line in lines:
        parts = line.split('/')
        output.append(parts[0].strip() + ' ' + parts[2].strip())

    with open('output.txt', 'w', encoding='utf-8') as file:
        for line in output:
            file.write(line + '\n')

process_file()
