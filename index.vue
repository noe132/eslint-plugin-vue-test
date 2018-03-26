<template>
  <div class="">
  </div>
</template>

<script>
  export default {
    name: 'Test',
    methods: {
      testMethod() {
        Promise.resolve()
          .then(() => {
            // SOME CODE HERE
          });
      },
      testMethod2() {
        Promise.all([
          Promise.resolve()
            .then(() => {
              // SOME CODE HERE
            }),
        ])
      },
    },
  };
</script>
