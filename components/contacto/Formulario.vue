<template lang="pug">
  .contacto__formulario
    .form__group
      label(for="name") Empresa / Nombre y Apellido
      input(name="name" placeholder="Nombre" v-model="name" @focus="hideMessage")

    .form__group
      label(for="phone") Teléfono
      input(name="phone" placeholder="Característica + Teléfono" v-model="phone" @focus="hideMessage")

    .form__group
      label(for="email") Email
      input(name="email" placeholder="Email" v-model="email" @focus="hideMessage")

    .form__group
      label(for="message") Mensaje
      textarea(name="message" placeholder="Contanos tu consulta" rows="5" v-model="message" @focus="hideMessage")

    .form__submit
      button(@click="submit") Enviar

    .form__message(v-show="showMessage")
      fa(:icon="[ 'fas', 'check' ]")
      span  Mensaje enviado

</template>

<script>
export default {
  name: 'Formulario',

  data: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
    showMessage: false
  }),

  computed: {
    payload() {
      const ret = {
        name: this.name,
        contact: `tel: ${this.phone} - mail: ${this.email}`,
        message: this.message
      }

      return JSON.stringify(ret)
    }
  },

  methods: {
    hideMessage() {
      this.showMessage = false
    },

    submit() {
      const body = this.payload

      fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
      })

      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
      this.showMessage = true
    }
  }
}
</script>

<style lang="scss">
  .contacto__formulario {
    grid-area: form;
    display: flex;
    flex-direction: column;
  }

  .form {
    &__group {
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      margin: .5rem 0;

      label { margin-bottom: .25rem; }

      input {
        border: 1px solid #BBB;
        border-radius: 3px;
        padding: .5rem;

        &:focus { border: 1px solid var(--color-main); }

        &::placeholder { font-size: 1rem; }
      }

      textarea {
        border: 1px solid #BBB;
        border-radius: 3px;
        padding: .5rem;
        resize: none;

        &:focus { border: 1px solid var(--color-main); }

        &::placeholder { font-size: 1rem; }
      }
    }

    &__submit button {
      margin: .5rem 0;
      padding: .5rem 2rem;
      background-color: var(--color-main);
      color: white;
      font-size: 1rem;

      border: none;
      border-radius: 3px;
      box-shadow: 0 1px 4px 0 #333;
    }

    &__message {
      margin: .5rem 0;
      font-weight: 600;
    }
  }
</style>
