<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    name: 'SwiperCard',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['images'],
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/img/${img}`, import.meta.url).href
        }
    },
}
</script>

<template>
    <swiper :pagination="{
        type: 'progressbar',
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="item in images" :key="item.img">
            <img :src="getImagePath(item.img)" />
        </swiper-slide>
    </swiper>
</template>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
