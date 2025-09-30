    <template>
        <div class ="bg-white text pt-3" :style="{height:'100vh'}">
            <h1 class="text-center text-success">ContactOpedia</h1>
                <div class="container">
                    <div class="row text-black p-2 mb-2">
                        <div class="col-6">OWNER NAME:  <input v-model="contactsowner"></div>
                        <div class="col-6 text-end"> Max Lucky Number: <input v-model.number="maxNumber"></div>

                    </div>
                   
                    <AddContact :onAddContact="onAddContact"></AddContact>
                    <div class ="row">
                        <div class="col-12" v-for="contact in contacts":key="contact.name">
                            <Contact 
                            :name="contact.name"
                            :phone="contact.phone"
                            :ownername="contact.ownername"
                            :email="contact.email"
                            :isFavorite="contact.isFavorite"
                            @update-favorite="contact.isFavorite = onUpdateFavorite($event, contact.phone)"
                            >
                        </Contact>

                        </div>
                    </div>
                        
                   
                </div>
        </div>
    </template>

    <script setup>
    import { reactive, ref, provide } from 'vue';
    import Contact from './components/Contact.vue';
    import AddContact from './components/AddContact.vue';

    const maxNumber = ref(100);
    provide('maxLuckyNumber',maxNumber);

    const contactsowner =ref("TEST");
    const contacts =reactive([
        {
            name:"Palaash",
            phone: 12312313,
            ownername:contactsowner,
            email:"gpalaash@gmail.com",
            isFavorite:false

        },
        {
            name:"Bella",
            phone: 12312313,
            ownername:contactsowner,
            email:"gpalaash@gmail.com",
            isFavorite:false
        },
        {
            name:"Gupta",
            phone: 12312313,
            ownername:contactsowner,
            email:"gpalaash@gmail.com",
            isFavorite:true
        },
        
    ])

    function onAddContact(contact){
        contact.ownername = contactsowner.value;
        contact.isFavorite = false;
        contacts.push(contact);

    }

    function onUpdateFavorite(isFavoriteFromChildComponent,phoneNumberFromParent){
        console.log(isFavoriteFromChildComponent);
        console.log(phoneNumberFromParent)
        return !isFavoriteFromChildComponent.isFavorite;
    }

    </script>

    <style></style>
