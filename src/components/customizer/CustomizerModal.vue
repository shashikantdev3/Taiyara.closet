<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4">Customizer Modal</h2>
      <p class="text-gray-600 mb-6">
        This customization feature is coming soon!
      </p>
      <button
        class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        @click="$emit('close')"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizerModal',
}
</script>

<style scoped>
</style>
