import random

def cadastrar_participantes():
    participantes = []
    print("\nCadastro de Participantes - Digite 'sair' para finalizar")
    while True:
        nome = input("Nome do participante: ").strip()
        if nome.lower() == 'sair':
            break
        if nome and nome not in participantes:
            participantes.append(nome)
        else:
            print("Nome inválido ou já cadastrado. Tente novamente.")
    return participantes

def sortear_amigo_secreto(participantes):
    if len(participantes) < 2:
        print("É necessário pelo menos 2 participantes para realizar o sorteio.")
        return None
    
    sorteio = participantes[:]
    random.shuffle(sorteio)
    
    amigos_secretos = {}
    for i in range(len(participantes)):
        amigo = sorteio[i]
        while amigo == participantes[i]:
            random.shuffle(sorteio)
            amigo = sorteio[i]
        amigos_secretos[participantes[i]] = amigo
    
    return amigos_secretos

def exibir_sorteio(amigos_secretos):
    print("\nResultado do Sorteio do Amigo Secreto:")
    for participante, amigo in amigos_secretos.items():
        print(f"{participante} -> {amigo}")

def main():
    participantes = cadastrar_participantes()
    amigos_secretos = sortear_amigo_secreto(participantes)
    if amigos_secretos:
        exibir_sorteio(amigos_secretos)

if __name__ == "__main__":
    main()
