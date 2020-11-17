<template>
    <div>
        <template v-if="type==='add'">
            <svg 
                xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 128 128" 
                width="64px" 
                height="64px">
                <path 
                    fill="#ff5576" 
                    d="M64 29A35 35 0 1 0 64 99A35 35 0 1 0 64 29Z" 
                    transform="rotate(-45.001 64 64.001)" />
                <path 
                    fill="#fff" 
                    d="M83,61H67V45c0-1.7-1.3-3-3-3s-3,1.3-3,3v16H45c-1.7,0-3,1.3-3,3s1.3,3,3,3h16v16c0,1.7,1.3,3,3,3s3-1.3,3-3 V67h16c1.7,0,3-1.3,3-3S84.7,61,83,61z" />
            </svg>
        </template>
        <template v-if="type==='delete'">
            <svg 
                viewBox="0 0 12 12" 
                role="presentation" 
                aria-hidden="true" 
                focusable="false" 
                style="height: 10px; width: 10px; display: block; margin:auto">
                <path 
                    fill="#fff" 
                    d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" />
            </svg>
        </template>
    </div>
</template>

<script>
    
    export default {

        props: ['type'],
}
</script>
