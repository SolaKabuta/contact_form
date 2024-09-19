<script setup lang="ts">

// function openForm() {
//   document.getElementById('contactUs').style.display = "block";
//   document.getElementById('openCta').style.display = "none";
// }

// function closeForm() {
//   document.getElementById('contactUs').style.display = "none";
// }


</script>

<template>
  <main class="w-screen h-screen bg-Green_200 grid place-content-center">
    <section class="">
      <!--CTA OPEN FORM-->
<!--      <div id="openCta" class="grid place-content-center">-->
<!--        <button @click="openForm" class="bg-Green_600 text-white w-44 h-10 rounded-md">Get in touch</button>-->
<!--      </div>-->
      <form id="contactUs" class=" bg-white w-[500px] py-6 px-5 [&_label]:text-xs rounded-md max-md:w-[300px]" action="">
        <h1 class="font-bold text-xl py-4">Contact Us</h1>
        <!--NAME-->
        <fieldset
            class="flex max-md:grid justify-between gap-3 [&_input]:my-1 [&_input]:py-1 [&_input]:px-2 [&_input]:border [&_input]:border-slate-400/80 [&_input]:w-full [&_input]:rounded-md">
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
          <label for="">
            Email Address *
          </label>
          <input type="text">
          <p class="invisible text-xs text-red-600">Enter a valid email address</p>
        </div>
        <!--TYPE-->
        <fieldset>
          <label for="">
            Query Type *
          </label>
          <section class="flex max-md:grid gap-3 max-md:gap-0 [&_div]:flex [&_div]:gap-2 [&_div]:py-3 [&_div]:my-3 [&_div]:max-md:my-2 [&_div]:px-5 [&_div]:w-full [&_div]:border [&_div]:border-slate-400/80 [&_div]:rounded-md">
            <div>
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
            class="flex flex-col [&_textarea]:border [&_textarea]:border-slate-400/80 [&_textarea]:w-full [&_textarea]:h-20 [&_textarea]:px-2 [&_textarea]:rounded-md">
          <label class="py-2 pt-6" for="">Message *</label>
          <textarea type="text"></textarea>
        </fieldset>
        <!--CHECKBOX-->
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
