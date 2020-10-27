#include <stdio.h>
//1-)
// int main(void) {
  
//    float sum1, sum2, med;
//    printf("Digite um numero: ");
//    scanf("%f",&sum1);
//    printf("Digite outro numero: ");
//    scanf("%f",&sum2);
//    med=  sum1*sum2;
//     printf("O resultado da multiplicação é: %.f",med);
// }

//2-)
// int main(void){
//   float sub1, sub2, res;
//   printf("Digite um numero: ");
//   scanf("%f",&sub1);
//   printf("Digite outro numero: ");
//   scanf("%f",&sub2);
//   res = sub1 - sub2;
//   printf("O resultado da subtração é: %.f",res);
// }

//3-)
// int main(void){
//   float not1, not2, med;
//   printf("Digite a primeira nota: ");
//   scanf("%f",&not1);
//   printf("Digite a segunda nota: ");
//   scanf("%f",&not2);
//   med = (not1+not2)/2;
//   printf("A media da sua nota é: %f",med);
// }

//4-)
// int main(void){
//   float div1, div2, res;
//   printf("Digite um nomero: ");
//   scanf("%f",&div1);
//   printf("Digite um outro numero: ");
//   scanf("%f",&div2);

//   res = div1 / div2;
//   printf("O valor da divisão é de : %.f",res);
// }

//5-)
// int main(void){
//   float not1, not2, med;
//   printf("Digite a primeira nota: ");
//   scanf("%f",&not1);
//   printf("Digite a segunda nota: ");
//   scanf("%f",&not2);
//   med = (not1+not2)/2;

//   if(med>=6){
//     printf("Parabens você foi aprovado! Sua nota é: %.f",med);
//   }else{
//     printf("Você foi reprovado!");
//   }
// }

//6-)
// int main(void){
//   float sal,cal1, cal2;
//   printf("Digite seu salario: ");
//   scanf("%f",&sal);
//   cal1 = 500/100*20;
//   cal2 = 501/100*10;

//   if(sal<=500){
//     printf("Parabens você ganhou aumento de 20 por cento. Seu salario agora é: %.f",cal1 + 500);
//   }else{
//     printf("Seu novo salario é de: %.f",cal2 + 501);
//   }
// }

//7-)
// int main(void){
//   float a, b, aux1, aux2;
//   printf("digite algo para A: ");
//   scanf("%f",&a);
//   printf("Digite algo para B: ");
//   scanf("%f",&b);
//   aux1 = a;
//   aux2 = b;
//   aux1 = b;
//   aux2 = a;
//   printf("O valor de A é: %.f \n",aux1);
//   printf("O valor de B é: %.f",aux2);
// }

//8-)lista 2
// int main(void){
//   float a, b;
//   printf("Digite um numero: ");
//   scanf("%f",&a);
//   printf("Digite um outro numero: ");
//   scanf("%f",&b);
//   printf("O resultado da soma dos dois numeros é: %.f\n",a+b);
//   printf("O resultado da subtração é: %.f\n",a-b);
//   printf("O resultado da multiplicação é: %.f\n",a*b);
//   printf("O resultado da divisão é: %.f\n",a/b);
// }

//9-)
// int main(void){
//   int num, res;
//   printf("Digite um numero: ");
//   scanf("%d",&num);
//   res = num * num;
//   printf("O resultado do quadrado é: %d",res);
// }

//10-)
// int main(void){
//   int num1, num2;
//   printf("Digite o numero de A: ");
//   scanf("%d",&num1);
//   printf("Digite o numero de B: ");
//   scanf("%d",&num2);
//   if(num1 == num2){
//     printf("O numero foi igual aos dois, numero A: %d\n",num1);
//     printf("O numero foi igual aos dois, numero B: %d\n",num2);
//   }else{
//   if(num1>num2){
//     printf("O numero de A é maior: %d\n",num1);
//     printf("O numero foi menor dos dois, numero B: %d\n",num2);
//   }else{
//     printf("O valor de B é maior que de A, valor de B: %d\n",num2);
//     printf("O valor de B é menor que de A, valor de A: %d\n",num1);
//   }
//   }
// }

//11-)
// int main(void){
//   float preco, cal;
//   printf("Digite o valor: ");
//   scanf("%f",&preco);
//   cal = preco * 5.06;
//   printf("O preço do dollar é de: %.f",cal);
// }

//12-)
// int main(void){
//   int num;
//   printf("Digite um numero: ");
//   scanf("%d",&num);

//   if(num%2==0)//operador %
//   {
//   printf("Par");
//   }
//   else
//   printf("Ímpar");
//   }


//13-)
// int main(void){
//   float hora, qtd, inss, sal, aux, res;
 
//   printf("Qual classe de desconto de INSS você esta em porcentagem ? ");
//   scanf("%f",&inss);
//   printf("Qual valor das horas de aula que você ministra? ");
//   scanf("%f",&hora);
//   printf("Quantas aulas você ministra por mês? ");
//   scanf("%f",&qtd);

//   sal = qtd * hora;
//   aux = sal/100*inss;
//   res = sal - aux;

//   printf("O seu salario liquido é de: %.f",res);
// }

//14-)
// int main(void){
//   int a;
//   printf("Digite um numero de 1 a 7, para reprentar as semanas: \n");
//   scanf("%d",&a);
//   switch(a){
//   case 1:{
//     printf("Domingo");
//     break;
//   }
//   case 2:{
//     printf("Segunda");
//     break;
//   }
//   case 3:{
//     printf("Terça");
//     break;
//   }
//   case 4:{
//     printf("Quarta");
//     break;
//   }
//   case 5:{
//     printf("Quinta");
//     break;
//   }
//   case 6:{
//     printf("Sexta");
//     break;
//   }
//   case 7:{
//     printf("Sabado");
//     break;
//   }
//   default: {
//     printf("Dias da semana inexistente");
//   }
// }
// }

//15-)
// int main(void){
//   int a;
//   for(a = 1; a <= 100; a=a+2){
//   printf("Numeros impars são: %d\n",a);
//   }
// }

//16-)
// int main(void){
//   int a = 1;

//   while(a <= 100){
//     printf("%d\n",a);

//     a = a + 2;
//   }
// }

//17-)