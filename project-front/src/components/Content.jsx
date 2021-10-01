import React from 'react';
import { MdComputer } from 'react-icons/md';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FcDataConfiguration } from 'react-icons/fc';
import '../styles/content.css';

function Content() {
  return (
    <section className="content_father">
      <div className="content_children">
        <MdComputer className="icons_content" />
        <div>
          <h3>Responsive Design</h3>
          <p>
            Ea corrupti quia sed dolores tempora
            est consequuntur
            tempore aut nobis
            rerum
          </p>
        </div>
      </div>
      <div className="content_children">
        <AiOutlineTrophy className="icons_content" />
        <div>
          <h3>Virtual Page Builder</h3>
          <p>
            Ea corrupti quia sed dolores tempora
            est consequuntur
            tempore aut nobis
            rerum
          </p>
        </div>
      </div>
      <div className="content_children">
        <FcDataConfiguration className="icons_content" />
        <div>
          <h3>Strong Admin Painel</h3>
          <p>
            Ea corrupti quia sed dolores tempora
            est consequuntur
            tempore aut nobis
            rerum
          </p>
        </div>
      </div>
    </section>
  );
}

export default Content;
