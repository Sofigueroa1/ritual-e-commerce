const { createApp } = Vue;

const ProductCard = {
    props: ['producto'],
    template: `
        <div class="card">
            <img :src="producto.foto" :alt="producto.nombre" class="card-img">
            <div class="card-info">
                <span class="category">{{ producto.categoria }}</span>
                <h4>{{ producto.nombre }}</h4>
                
                <button @click="showDetail = !showDetail" class="btn-info">
                    {{ showDetail ? 'Ocultar info' : 'Ver info' }}
                </button>

                <p v-show="showDetail" class="info">{{ producto.descripcion }}</p>

                <div class="card-actions">
                    <button 
                        class="btn-add" 
                        :class="{ active: producto.add }"
                        @click="$emit('add', producto)"> {{ producto.add ? "-" : "+" }}
                    </button>
                    <button 
                        class="btn-fav" 
                        :class="{ active: producto.isFav }" 
                        @click="$emit('fav', producto)">
                        {{ producto.isFav ? '♥' : '♡' }}
                    </button>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            showDetail: false 
        }
    }
};

const app = createApp({
    components: {
        'product-card': ProductCard
    },
    data() {
        return {
            name: "Sofia",
            carrito: [ ],
            productos: [
                { nombre: "Real She", descripcion: "Hidratación profunda.", categoria: "Cabello", foto: "img/shampoo.jpg", add: false, isFav: false },
                { nombre: "Glow System", descripcion: "Efecto glow, radiante.", categoria: "Skincare", foto: "img/serum_alo_glow.jpg", add: false, isFav: true },
                { nombre: "Sunset Nectar", descripcion: "Firmeza y suavidad.", categoria: "Cuerpo", foto: "img/nectar_body_wash.jpg", add: false, isFav: false },
                { nombre: "Manera Cherry", descripcion: "Exfoliante para el cuerpo.", categoria: "Cuerpo", foto: "img/exfoliante_manera_spa_ritual.jpg", add: false, isFav: false },
                { nombre: "Gueva Bech Waves", descripcion: "Protector UV.", categoria: "Cabello", foto: "img/cabello_ceremonia_spray.jpg", add: false, isFav: false },
                { nombre: "Recovery MUD", descripcion: "Mascara reparadora", categoria: "Skincare", foto: "img/mask.jpg", add: false, isFav: false },
                { nombre: "Gloss Bomb", descripcion: "Hidrata y repara la piel de los labios", categoria: "Makeup", foto: "img/glossier.jpg", add: false, isFav: false },
                { nombre: "Nro 18", descripcion: "Rubor con protección UV", categoria: "Makeup", foto: "img/brush_nro18.jpg", add: false, isFav: false }
            ]
        }
    },
    
    methods: {
        // Agregar al carrito //
        agregarAlCarrito(producto) {
           producto.add = !producto.add;
          
        },
        // Poner favorito //
        marcarFavorito(producto) {
            producto.isFav = !producto.isFav;
        },
    }
});

app.mount('#app');