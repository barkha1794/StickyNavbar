import { ReactComponent as Image1 } from "~/assets/img1.svg";
import { ReactComponent as Image2 } from "~/assets/img2.svg";
import { ReactComponent as Image3 } from "~/assets/img3.svg";
import { ReactComponent as Image4 } from "~/assets/img4.svg";
import { ReactComponent as Image5 } from "~/assets/img5.svg";
import { ReactComponent as Image6 } from "~/assets/img6.svg";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="portfolio">
        <div className="left">
          <Image1 />
        </div>
        <div className="right">
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            corporis accusamus, ullam esse quae autem dolores minus minima
            inventore debitis iste adipisci quasi optio nisi aliquid consectetur
            hic illo eaque veniam molestiae ducimus. Delectus nostrum dicta
            magni! Doloribus at voluptatibus voluptatem placeat possimus
            inventore eius saepe eos, in error rem?
          </p>
        </div>
      </section>
      <section id="skills">
        <div className="left">
          <Image2 />
        </div>
        <div className="right">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            accusantium necessitatibus in maxime quia voluptates, numquam
            voluptatem maiores quo, recusandae dicta, aliquam dignissimos labore
            eum. Quae, delectus. Quo quidem sapiente pariatur iste vel placeat
            accusantium eos autem nostrum. Aut iste consequuntur necessitatibus,
            obcaecati iusto porro quidem laudantium ipsum quam molestiae?
          </p>
        </div>
      </section>
      <section id="about">
        <div className="left">
          <Image3 />
        </div>
        <div className="right">
          <h2>About</h2>
          <p>
            Natus, in! Error, possimus? Labore, odit! Veniam libero laudantium
            fugit, quibusdam maiores labore expedita voluptatem facilis
            necessitatibus dolorem, voluptate pariatur. Atque, commodi fugiat
            neque delectus vitae laudantium ducimus tempora. Culpa enim, ipsum
            quibusdam consectetur veritatis ipsa deleniti sunt minima, nam ea
            aperiam eaque atque excepturi? Veritatis explicabo aspernatur omnis
            aliquam!
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="left">
          <Image4 />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <p>
            Nostrum, eveniet magnam amet fugiat labore possimus voluptatum nemo
            itaque? Facere iusto odit quasi magnam dolor, ut consectetur! Cumque
            voluptatibus molestiae maxime mollitia at sit, labore nulla debitis
            rem officia, illo deleniti aliquid pariatur quam, magni dolor
            similique ipsa sequi hic impedit suscipit velit. In dicta neque vero
            veniam harum?
          </p>
        </div>
      </section>
      <section id="marketing">
        <div className="left">
          <Image5 />
        </div>
        <div className="right">
          <h2>Marketing</h2>
          <p>
            Delectus iure aperiam repellat non nemo, error adipisci harum
            assumenda neque? Repudiandae at magni rerum labore facilis soluta?
            Blanditiis et recusandae quos consectetur earum placeat eum qui aut,
            animi, non exercitationem quas officiis similique dignissimos
            consequatur ipsa facilis suscipit ad dolorum voluptatem. Officiis
            unde magni tenetur possimus rem eligendi? Minima.
          </p>
        </div>
      </section>
      <section id="social-media">
        <div className="left">
          <Image6 />
        </div>
        <div className="right">
          <h2>Social Media</h2>
          <p>
            Quam sapiente, corrupti odio sequi officia repellendus doloribus.
            Sed unde officia dolore illo exercitationem perspiciatis modi in
            molestiae culpa. Incidunt exercitationem ea pariatur voluptatibus
            accusantium iure cum soluta illo dicta, debitis cumque, voluptatem
            enim similique dolore natus eos eaque saepe. Recusandae maiores
            veniam laborum voluptate in hic quo repellat aperiam!
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
