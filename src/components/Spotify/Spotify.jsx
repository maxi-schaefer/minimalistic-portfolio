import './Spotify.scss'

const Spotify = (props) => {
    const { data, listening_to_spotify, currentTime } = props
    const { start, end } = data.timestamps || {};

    const totalDuration = end - start;
    const elapsedTime = currentTime - start;

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

  return listening_to_spotify && (
    <div className="spotify_container">
        <h2>Currently listening to:</h2>
        <a href={`https://open.spotify.com/intl-de/track/${data.track_id}`} target='_blank' rel="noreferrer">
            <div className='spotify_card'>
                <img src={data.album_art_url} alt='Album Cover'/>
                <div className='song_information'>
                    <h2>{data.song}</h2>
                    <p className='artist'>{data.artist} | {formatTime(elapsedTime)}/{formatTime(totalDuration)}</p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default Spotify