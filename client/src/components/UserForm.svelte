<script lang="ts">
  import axios from "axios";

  let name: string = "";
  let age: number = 0;
  let address: string = "0x";
  let message: string = "";

  async function submitForm() {
    try {
      await sendUserFormDataToBackend(name, age, address);
    } catch (e) {
      displayErrorMessage(e.response.data.error);
    }
  }

  async function sendUserFormDataToBackend(
    name: string,
    age: number,
    address: string
  ) {
    await axios.post(
      "http://localhost:3002/user",
      {
        name: name,
        age: age,
        ethereumAddress: address,
      },
      {
        withCredentials: false,
      }
    );
    message = "Successfully created user";
  }

  function displayErrorMessage(errorMessage: string) {
    if (errorMessage) {
      message = errorMessage;
    }
  }
</script>

{#if message}
  <h3 style="color:red">
    {message}
  </h3>
{/if}
<input bind:value={name} type="text" placeholder="Name" />
<input bind:value={age} type="number" placeholder="Age" />
<input bind:value={address} type="text" placeholder="Ethereum Address" />
<br />
<button on:click={async () => await submitForm()}>Submit</button>
