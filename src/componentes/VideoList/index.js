import styles from './VideoList.module.css';
import Card from '../Card';

function VideoList({ videos, emptyHeading }) {
  
  const countVideos = videos.length;
  let heading = emptyHeading;

  // verificar se há vídeos para apresentar no plural ou singular
  if (countVideos > 0) {
    const noun = countVideos > 1 ? "Vídeos" : "Vídeo";
    heading = `${countVideos} ${noun}`;
  }

  return (
    <>
      <h2>{heading}</h2>

      <section className={styles.videos}>
        {
          videos.map(
            video => <Card id={video.id} key={video.id} />
          )
        }
      </section>
    </>
  );
};

export default VideoList;
