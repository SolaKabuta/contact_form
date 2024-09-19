<script setup lang="ts">
</script>

<template>
  <main class="w-screen h-screen bg-Green_200 grid place-content-center">
    <section class="">
      <!--<button></button>-->
      <form class="bg-white w-[500px] py-6 px-5 rounded-md" action="">
        <h1 class="font-bold text-xl py-4">Contact Us</h1>
        <!--NAME-->
        <fieldset
            class="flex justify-between gap-3 [&_input]:my-1 [&_input]:py-1 [&_input]:px-2 [&_input]:border [&_input]:border-slate-400/80 [&_input]:w-full [&_input]:rounded-md">
          <div class="flex-col">
            <label for="">
              First Name *
            </label>
            <input class="" type="text">
          </div>
          <div class="flex-col">
            <label for="">
              Last Name *
            </label>
            <input type="text">
          </div>
        </fieldset>
        <!--EMAIL-->
        <div
            class="flex-col [&_input]:my-1 [&_input]:py-1 [&_input]:px-2 [&_input]:border [&_input]:border-slate-400/80 [&_input]:w-full [&_input]:rounded-md">
          <label class="" for="">
            Email Address *
          </label>
          <input type="text">
        </div>
        <!--TYPE-->
        <fieldset class="">
          <label for="">
            Query Type *
          </label>
          <section class="flex justify-between gap-3 [&_div]:flex [&_div]:gap-2 [&_div]:py-2 [&_div]:px-2 [&_div]:w-full [&_div]:border [&_div]:border-slate-400/80 [&_div]:rounded-md">
            <div class="">
              <input type="radio">
              <label for="">General Enquiry</label>
            </div>
            <div>
              <input type="radio">
              <label for="">Support Request</label>
            </div>
          </section>
        </fieldset>
        <!--MESSAGE-->
        <fieldset
            class="flex flex-col [&_input]:border [&_input]:border-slate-400/80 [&_input]:w-full [&_input]:h-24 [&_input]:rounded-md">
          <label for="">Message</label>
          <input type="text">
        </fieldset>
        <!--RADIO-->
        <div class="flex items-center gap-3 py-6 [&_label]:text-sm">
          <input type="checkbox" required>
          <label for="">I consent to being contacted by the team *</label>
        </div>
        <!--BUTTON-->
        <button class="bg-Green_600 w-full text-white rounded-md py-2">Submit</button>
      </form>
    </section>
  </main>
</template>

<style scoped>

</style>
