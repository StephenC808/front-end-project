
<div class="col-lg-3 col-md-6 mb-3 d-flex align-items-stretch">
    {#if user}
        <div class="card">
            <img src={user.current.condition.icon} class="card-img-top" alt="User"/>
            <div class="card-body">
                <h5 class="card-title">
                    <p>---------------------</p>
                    <p>{user.location.name}</p>
                    {user.current.condition.text}
                </h5>
                <p class="card-text">{user.location.name}</p>
                <p class="card-text">
                    {user.current.temp_c}°C
                </p>
                <p class="card-text">
                    {user.current.humidity}%
                </p>
            </div>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</div>

<script>
    import { onMount } from 'svelte';

    let user = null;
    export let county ="Dublin";

    onMount(async () => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=290d085fbcf34ab78fa184457241607&q=${county}&aqi=no`);
            const data = await response.json();
            //var json = JSON.parse(data);
            console.log(data.location.name);
            user = data;
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    });
</script>
