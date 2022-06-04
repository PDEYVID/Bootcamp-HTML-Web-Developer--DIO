// Exemplos de se e senão e calcular a media aritmetrica
// autor: Paulo Deyvid
programa
{
	
	funcao inicio()
	{
		real nota1, nota2, nota3, nota4, media
		cadeia aluno

		escreva("Digite o nome do Aluno: ")

		leia (aluno)

		escreva("Digite a nota1: ")
		leia(nota1)
		escreva("Digite a nota2: ")
		leia(nota2)
		escreva("Digite a nota3: ")
		leia(nota3)
		escreva("Digite a nota4: ")
		leia(nota4)

		media = (nota1+nota2+nota3+nota4)/4

		escreva("Sua Media e: " + media)
		
		// verificar se a media for maior ou menor igyual a 7
		// lupi de se e senao
		se (media>=7){
			escreva("\n" + "Parabens voce foi aprovado")
		}
		senao {
			escreva("\n" + "Parabens voce foi Reprovado")
				
	  	}
	}
} 
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 56; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */