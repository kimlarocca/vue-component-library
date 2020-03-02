<template>
    <div>
        <div class="container">
            <h1>Carousels</h1>

            <hr class="margin-vertical-3">

            <p><strong>IMAGES:</strong></p>
            <p>We recommend a minimum image width of 1600px for this component.</p>

            <v-spacer/>

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>perPage: number of slides to show per page (default is 2)</li>
                <li>see more options at <a href="https://ssense.github.io/vue-carousel/api/">https://ssense.github.io/vue-carousel/api/</a>
                </li>
            </ul>

            <v-spacer :size="[2,3,4]"></v-spacer>
            <p>
                <strong>EXAMPLES:</strong>
            </p>
            <v-spacer/>

        </div>

        <section>
            <carousel :perPage="1">
                <slide>
                    <img src="https://picsum.photos/1900/900?grayscale">
                </slide>
                <slide>
                    <img src="https://picsum.photos/1899/900?grayscale">
                </slide>
                <slide>
                    <img src="https://picsum.photos/1901/900?grayscale">
                </slide>
            </carousel>
        </section>

        <v-spacer :size="[2,3,4]"></v-spacer>

        <div class="container">
            <p><strong>Card Carousel Example</strong></p>
            <p class="margin-bottom-2">shows 3 on desktop, 2 on tablet, and 1 on mobile</p>

            <section class="card-carousel">
                <carousel :perPage="1" :perPageCustom="[[769, 2], [1024, 3]]">
                    <slide>
                        <div class="card-carousel-content">
                            <card
                                    header="Header"
                                    image="https://picsum.photos/600/400?grayscale"
                                    altText="alternative text"
                                    subtitle="subtitle"
                                    title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                            >
                            </card>
                        </div>
                    </slide>
                    <slide>
                      <div class="card-carousel-content">
                          <card
                                  header="Header"
                                  image="https://picsum.photos/600/400?grayscale"
                                  altText="alternative text"
                                  subtitle="subtitle"
                                  title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                          >
                          </card>
                      </div>
                    </slide>
                    <slide>
                      <div class="card-carousel-content">
                          <card
                                  header="Header"
                                  image="https://picsum.photos/600/400?grayscale"
                                  altText="alternative text"
                                  subtitle="subtitle"
                                  title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                          >
                          </card>
                      </div>
                    </slide>
                </carousel>
            </section>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p class="margin-bottom-3"><strong>Featured "X" Carousel Example</strong></p>
            <carousel
                    class="text-center"
                    :navigationEnabled="true"
                    navigationPrevLabel="&lang;"
                    navigationNextLabel="&rang;"
                    :perPage="2"
                    :perPageCustom="[[769, 3], [1024, 4]]"
            >
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+1" alt="placeholder image"/>
                </slide>
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+2" alt="placeholder image"/>
                </slide>
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+3" alt="placeholder image"/>
                </slide>
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+4" alt="placeholder image"/>
                </slide>
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+5" alt="placeholder image"/>
                </slide>
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+6" alt="placeholder image"/>
                </slide>
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+7" alt="placeholder image"/>
                </slide>
                <slide>
                    <img src="https://via.placeholder.com/150x50?text=Logo+8" alt="placeholder image"/>
                </slide>
            </carousel>
        </div>

        <v-spacer :size="[2,3,4]"></v-spacer>

    </div>
</template>


<script>
    import Carousel from '../components/Carousel/Carousel'
    import Slide from '../components/Carousel/Slide'
    import Card from '../components/Card'

    export default {
        name: 'CarouselPage',
        components: {
            'carousel': Carousel,
            'slide': Slide,
            'card': Card
        }
    }
</script>
