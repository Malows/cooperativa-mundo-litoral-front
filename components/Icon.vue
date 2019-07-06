<template lang="pug" functional>
  a(:href="`https://www.${props.name}.com/mundolitoral/`" target="_blank" :aria-label="`Contactanos a través de ${props.name}`")
    fa(:icon="[ 'fab', props.name === 'facebook' ? 'facebook-f' : 'instagram' ]")
</template>
