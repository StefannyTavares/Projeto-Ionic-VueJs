<template>
    <ion-menu
        content-id="main-content"
        side="start"
        type="overlay"
    >
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list v-for="(item, index) in itensRenderizado" :key="index">
                <ion-item class="redirecionar" @click="closeMenu(item)">
                    <ion-label>{{ item.nome }}</ion-label>
                    <ion-icon slot="start" :icon="item.icon" />
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>

    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button />
            </ion-buttons>
            <ion-title>Olá, seja bem-vindo!</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content id="main-content"> </ion-content>
    <router-view />
</template>
  
<script setup>
import router from "@/router";
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonIcon,
} from "@ionic/vue";
import { homeSharp, createOutline, lockClosedOutline } from "ionicons/icons";
import { reactive } from "vue";

const itensRenderizado = [
    { nome: "Home", rota: "/lista", icon: homeSharp },
    { nome: "Cadastrar", rota: "/cadastro", icon: createOutline },
    { nome: "Acessar", rota: "/login", icon: lockClosedOutline },
];

function closeMenu(item) {
    router.push(`${item.rota}`);
}
</script>
  
<style scoped>
.redirecionar {
    cursor: pointer;
}

</style>
  