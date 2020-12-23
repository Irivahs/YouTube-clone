import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0xffffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="660k"
                noOfVideos={382}
                description="You can find awesome program
                Lets Build a Youtube Clone with REACT js for Beginners"
            />
            <hr/>

            <VideoRow 
            views="1.4M"
            subs="659k"
            description="Do you want a Free One free hour training..."
            timestamp="59 seconds ago"
            channel="Clever Programmer"
            title="Lets Build a Youtube Clone with REACT js for Beginners"
            image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CK6b2_4F&rs=AOn4CLCtaN49auvDGwg9p4oMXC-ji_7iTw"
            />
             <VideoRow 
            views="1.4M"
            subs="659k"
            description="Do you want a Free One free hour training..."
            timestamp="59 seconds ago"
            channel="Clever Programmer"
            title="Lets Build a Youtube Clone with REACT js for Beginners"
            image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CK6b2_4F&rs=AOn4CLCtaN49auvDGwg9p4oMXC-ji_7iTw"
            />
             <VideoRow 
            views="1.4M"
            subs="659k"
            description="Do you want a Free One free hour training..."
            timestamp="59 seconds ago"
            channel="Clever Programmer"
            title="Lets Build a Youtube Clone with REACT js for Beginners"
            image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CK6b2_4F&rs=AOn4CLCtaN49auvDGwg9p4oMXC-ji_7iTw"
            />
             <VideoRow 
            views="1.4M"
            subs="659k"
            description="Do you want a Free One free hour training..."
            timestamp="59 seconds ago"
            channel="Clever Programmer"
            title="Lets Build a Youtube Clone with REACT js for Beginners"
            image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CK6b2_4F&rs=AOn4CLCtaN49auvDGwg9p4oMXC-ji_7iTw"
            />
        </div>
    )
}

export default SearchPage
