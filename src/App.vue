<script setup lang="ts">

function openForm() {
  document.getElementById('contactUs').style.display = "block";
  document.getElementById('openCta').style.display = "none";
}

function closeForm() {
  document.getElementById('contactUs').style.display = "none";
}

function submit () {
  document.getElementById('toast').style.display = "block";
  document.getElementById('contactUs').style.display = "none";
  console.log("message sent");
}


// function clearRadio () {
//   let radio = document.getElementById("radio_one");
//   radio.checked = false;
// }


</script>

<template>
  <main class="w-screen h-screen bg-Green_200 grid place-content-center">
    <section class="">
      <!--CTA OPEN FORM-->
      <div id="openCta" class="grid place-content-center">
        <button @click="openForm" class="bg-Green_600 text-white text-xl w-44 h-20 rounded-md hover:bg-Grey_900 transition duration-300">Get in touch !</button>
      </div>
      <!--"event.keycode === 13" actually equal to "Enter" so it prevent the user to press it and submit that way-->
      <form onkeydown="if(event.keyCode === 13) {return false;}" id="contactUs" class="hidden bg-white w-[500px] py-6 px-5 [&_label]:text-xs rounded-md max-md:w-[300px]" action="">
        <h1 class="font-bold text-xl py-4">Contact Us</h1>
        <!--NAME-->
        <fieldset
            class="flex max-md:grid justify-between gap-3 [&_input]:my-1 [&_input]:py-1 [&_input]:px-2 [&_input]:border [&_input]:border-slate-400/80 [&_input]:w-full [&_input]:rounded-md">
          <div class="flex-col">
            <label for="firstName">
              First Name *
            </label>
            <input placeholder="Jane" id="firstName" class="focus:bg-Green_200 transition duration-200 placeholder-slate-400/80 placeholder:text-sm" type="text">
          </div>
          <div class="flex-col">
            <label for="lastName">
              Last Name *
            </label>
            <input placeholder="Doe" id="lastName" class="focus:bg-Green_200 focus:border-red-600 transition duration-200 placeholder-slate-400/80 placeholder:text-sm" type="text" required>
          </div>
        </fieldset>
        <!--EMAIL-->
        <div
            class="flex-col [&_input]:my-1 [&_input]:py-1 [&_input]:px-2 [&_input]:border [&_input]:border-slate-400/80 [&_input]:w-full [&_input]:rounded-md">
          <label for="email">
            Email Address *
          </label>
          <input autocomplete="on" placeholder="you@exemple.com" id="email" onblur="checkValidity('test', '@', '', 'Invalid mail entered (requires both first and last name)');" class="focus:bg-Green_200 invalid:text-pink-600 transition duration-200 placeholder-slate-400/80 placeholder:text-sm" type="text" required>
        </div>
        <!--TYPE-->
        <fieldset>
          <label for="radio_one">
            Query Type *
          </label>
          <section class="flex max-md:grid gap-3 max-md:gap-0 [&_div]:flex [&_div]:gap-2 [&_div]:py-3 [&_div]:my-3 [&_div]:max-md:my-2 [&_div]:px-5 [&_div]:w-full [&_div]:border [&_div]:border-slate-400/80 [&_div]:rounded-md">
            <!--adding name attribute to both input prevent them to be both selected-->
            <div>
              <input id="radio_one" type="radio" required name="type">
              <label id="generalRadio" for="radio_one" >General Enquiry</label>
            </div>
            <div>
              <input id="radio_two" type="radio" required name="type">
              <label for="radio_two">Support Request</label>
            </div>
          </section>
        </fieldset>
        <!--MESSAGE-->
        <fieldset
            class="flex flex-col [&_textarea]:border [&_textarea]:border-slate-400/80 [&_textarea]:w-full [&_textarea]:h-20 max-md:[&_textarea]:h-52 [&_textarea]:px-2 [&_textarea]:rounded-md">
          <label class="py-2 pt-6" for="message">Message *</label>
          <textarea id="message" type="text"></textarea>
        </fieldset>
        <!--CHECKBOX-->
        <div class="flex items-center gap-3 py-6 [&_label]:text-sm">
          <input id="checkbox" type="checkbox" required>
          <label for="checkbox">I consent to being contacted by <br class="md:hidden"> the team *</label>
        </div>
        <!--BUTTON-->
        <button @click="submit" type="submit" value="submit" class="bg-Green_600 w-full text-white rounded-md py-2 hover:bg-Grey_900 transition duration-300">Submit</button>
      </form>
    </section>
    <!--TOAST MESSAGE-->
    <div  class="grid place-content-center">
      <p id="toast" class="hidden bg-Grey_900 py-12 px-8 w-full text-white text-xl text-center rounded-md">Yay! Contact successfully sent</p>
    </div>
  </main>
</template>

<style scoped>

</style>
