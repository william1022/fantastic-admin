const useExampleStore = defineStore(
  // 唯一ID
  'example',
  () => {
    const someThing = ref(0)

    return {
      someThing,
    }
  },
)

export default useExampleStore
