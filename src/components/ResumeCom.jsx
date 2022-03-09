import React from 'react'
import styled from 'styled-components'
import {LayoutCulame, Layouts} from '../styles/Layouts'
import Title from '../components/Title'
import SmallTitle from './SmallTitle'
import ResumeItem from '../components/ResumeItem';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
const ResumeCom = () => {
    const briefcase = <WorkIcon />
    const school = <SchoolIcon />
  return (
    <MainReasumeCom>
   
      <Title title={'resume'} span={'resume Me'} />
      <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'17/1/2022 - 20/1/2022'} 
                        title={'mostaql.com'}
                        subTitle={'landing page react'}
                        text={'This is the custome ropinion :Brother Muhammad is one of the best young people I have dealt with, God willing, he is understanding and professional and accepts modifications with an open heart. I advise dealing with him '} 
                    />
                    <ResumeItem 
                        year={'25/8/2021 - 15/1/2022'} 
                        title={'framework'}
                        subTitle={'Udemy'}
                        text={'I learned the rest of all the skills listed in this period and applied more than five high and many liquefied applications at EDABIT and further stained in the mdn, W3Schools and I followed several courses in udemy'} 
                    />
                    <ResumeItem 
                        year={'1/1/2021 - 8/7/2021'} 
                        title={'html/css/javascript'}
                        subTitle={'Elzero'}
                        text={'HTML / CSS / JavaScript has learned about 7 months from YouTube and I have made many applications and there is a comprehensive application in my portfolio called GYM and I followed several other courses in udemy'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - 2022'} 
                        title={'Faculty of Commerce'}
                        subTitle={'Ain Shams University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2016 - 2019'} 
                        title={'azhar el delta school'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
     
  </MainReasumeCom>
  )
}
const MainReasumeCom = styled.div`
       .small-title{
        padding-bottom: 3rem;
        margin-top:4rem ;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }

`
export default ResumeCom