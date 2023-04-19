import { defineStore } from 'pinia'

export const useGlobal = defineStore('global', {
    state: () => ({
        users: [
            { id: 0, nome: 'Stéfanny', email: 'stef@gmail.com', senha: '012345', telefone: '4903-9652'},
            { id: 1, nome: 'Adriana', email: 'adri@gmail.com', senha: '0123456', telefone: '3905-9663' },
            { id: 2, nome: 'Luiza', email: 'luiza@gmail.com', senha: '01234567', telefone: '4692-9652' },
            { id: 3, nome: 'João', email: 'joao@gmail.com', senha: '01234568', telefone: '3903-0003' },
            { id: 4, nome: 'Maria', email: 'maria@gmail.com', senha: '01234568', telefone: '4563-9621' },
        ],
        acessar: false,
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})
