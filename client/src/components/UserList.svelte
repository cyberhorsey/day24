<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  let users = [];
  async function getUsers() {
    const result = await axios.get("http://localhost:3002/user");
    return result.data; // result.data will be an array of the users.
  }

  onMount(async function () {
    users = await getUsers();
  });
</script>

{#each users as user}
  {user.name}
  <br />
{/each}
