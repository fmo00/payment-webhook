# Pós Tech - Tech challenge 2

### Alunos

- Débora Silveira - RM353919
- Eduardo Petri - RM353438
- Fernanda - RM 353224
- Miriéle Silvério - RM 353515

### O que é o projeto?
A segunda parte do tech challenge solicita a implementação da API da fase 1 ([snackbar-api](https://github.com/fmo00/snack-bar-api/tree/main)) com a API do [Mercado Pago](https://www.mercadopago.com.br/developers/pt/docs) para integração com o [pagamento em QR code](https://www.mercadopago.com.br/developers/pt/docs/qr-code/landing) disponibilizado por eles.

Implementação de um webhook para receber notificação sobre o pagamento de um pedido feito pela API do Mercado Pago.
Especificações seguida para implementação: https://www.mercadopago.com.br/developers/pt/docs/qr-code/additional-content/your-integrations/notifications/ipn#editor_2

### Como iniciar localmente

```bash
$ cd ${PROJECT_DIRECTORY}
$ docker-compose --env-file ./env/local.env up
```
