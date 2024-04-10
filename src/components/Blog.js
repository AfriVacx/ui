import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Blogger from "../data/img.png";

function Blog() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="blog">
      <div className="sidebar">
        <Sidebar
          collapsed={collapsed}
          style={{
            height: collapsed ? "5%" : "100%",
            backgroundColor: "white",
          }}
        >
          <Menu>
            <div className="btnn">
              <button onClick={handleToggleSidebar}>
                {collapsed ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
              </button>
            </div>
            {collapsed ? (
              ""
            ) : (
              <div>
                <MenuItem>Corona virus vaccine</MenuItem>
              </div>
            )}
          </Menu>
        </Sidebar>
      </div>
      <div className="blog_details">
        <div className="blogger_image">
          <img src={Blogger} alt="ottih" />
          <h3>Ottih Nneoma Jennifer</h3>
        </div>
        <h5>Papiloma Vaccines</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eaque
          tempora atque nobis quos ab provident pariatur et neque architecto
          obcaecati velit, eligendi saepe ipsa minima quia beatae perspiciatis
          inventore soluta debitis minus consectetur iusto placeat! Fuga
          consequuntur eveniet, ipsum accusamus maxime cumque minus, amet
          perferendis distinctio eaque mollitia cupiditate omnis sapiente
          adipisci necessitatibus deleniti magni molestias! Rerum eligendi vero
          reprehenderit blanditiis maxime recusandae odio aut iste itaque magnam
          atque vel ducimus ratione nobis natus qui ipsam praesentium tenetur
          error, molestiae quaerat ex animi neque? Temporibus at reiciendis
          dolorem magnam quis eos maxime recusandae quae odio minima quam
          doloremque fugit voluptatem facere numquam, iusto soluta illum!
          Dignissimos omnis sunt, consequuntur quaerat culpa dolorem, illo quo
          nisi iure, maxime vel mollitia laudantium dolorum eos exercitationem
          repellendus beatae iusto quae corrupti labore eveniet est! Nostrum nam
          iure culpa. Repudiandae numquam repellendus, dignissimos ut beatae
          perferendis dolorem eum quia suscipit nobis adipisci, nostrum ipsam
          delectus enim dolore illum amet saepe dolor explicabo doloribus fugit
          voluptates? Minima voluptatum officiis velit explicabo esse voluptas,
          eos iure officia illo facere veritatis nulla inventore quasi
          asperiores itaque cumque libero odit corporis et autem dignissimos ab
          natus quos? Delectus ipsum ratione doloribus praesentium libero ipsam
          voluptatem, quidem est. Incidunt voluptates tempora officia tempore
          omnis perferendis amet minima illo natus dolorum eius quibusdam, id
          velit dolor magni reiciendis harum quae, eum porro laborum.
          Accusantium necessitatibus odio earum quae doloremque hic vero qui
          labore temporibus veritatis, quod eius soluta sit! Porro ab sed amet
          libero eveniet eius, sapiente ratione, vero qui commodi praesentium
          assumenda sit dignissimos perferendis tenetur aliquam dolores deleniti
          sint voluptatem natus mollitia suscipit optio repudiandae! Quod, id.
          Tempora quisquam quae totam magnam vitae eligendi vero nisi natus
          magni temporibus. Modi repellat numquam magni doloremque optio quo
          officia ducimus velit suscipit laudantium praesentium tempore vitae
          vero, repudiandae, animi porro ut aspernatur dolores? Repellendus
          laborum veritatis voluptates maxime culpa deserunt ex corrupti
          necessitatibus, earum omnis molestiae error nulla enim aliquid quas
          provident magnam. Nostrum atque facilis quibusdam aliquam architecto?
          Cumque, quae suscipit fugit rerum iure sunt odio rem illum quod dolor
          maiores, accusantium ut est vero ipsa temporibus! Quas, delectus
          blanditiis! Perspiciatis nam repellendus laborum dolorem doloribus
          iste omnis, a impedit assumenda voluptatibus dolorum unde quo quos
          placeat debitis modi voluptate sunt vero, inventore repellat optio
          nesciunt beatae laboriosam tempore? Vel vero perspiciatis ullam,
          cumque eos iste ratione numquam repellendus quis accusamus culpa
          deleniti, voluptate repudiandae error cupiditate, nobis molestias ea
          similique enim et? Exercitationem minima rem dolore recusandae dicta
          nulla quis deserunt nostrum nisi nesciunt aliquid suscipit accusantium
          quo ipsum vel quia modi dolorem consectetur eaque, repellendus ullam
          doloremque? Eos nesciunt libero laudantium ducimus reiciendis, sed
          mollitia necessitatibus! Deleniti suscipit animi doloribus porro modi,
          dolore cumque quam, natus fugit illum recusandae alias quidem
          cupiditate praesentium incidunt a ab delectus consectetur earum sequi,
          nesciunt accusantium! A, illum asperiores, vero dolorem consequuntur
          sapiente officiis voluptatum aut doloribus ducimus itaque cumque
          labore porro quos dolore. Itaque quos explicabo quae, ducimus veniam
          molestiae porro dolore aliquid quam odit obcaecati exercitationem unde
          inventore.
        </p>
      </div>
    </div>
  );
}

export default Blog;
