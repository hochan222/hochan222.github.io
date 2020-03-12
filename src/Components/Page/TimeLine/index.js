import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
// import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
// import StarIcon from '@material-ui/icons/Star';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components'
// import './style.scss'


const TimeLineA = styled.a`
    text-decoration:none;
    &:link {text-decoration: none; color: #838cff;}
    &:visited {text-decoration: none; color: #838cff;}
    &:active {text-decoration: none; color: #838cff;}
    &:hover {text-decoration: none; color: #838cff;}
`

class TimeLine extends Component {
    render() {
        return (
            <>
              <VerticalTimeline className="info" id="info">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  // date="2011 - present"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<AccessibilityNewIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Hufstory</h3>
                  <h4 className="vertical-timeline-element-subtitle">since 2014</h4>
                  <p>
                  훕스토리는 개발팀, 기획&디자인팀으로 이루어진 교내 학생자치기구입니다.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="November 4 2019"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<AssignmentIndIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">외대솔로 탈출 및 신입 팀원 모집 공고</h4>
                  <p>
                    외대 솔로 탈출 일정: 11월 4일 – 11월 13일
                    <br/>
                    신입 팀원 모집 일정: 11월 4일 – 11월 15일
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="What"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<DoneOutlineIcon />}
                >
                  {/* <h3 className="vertical-timeline-element-title">'외대 솔로 탈출'이란?</h3> */}
                  <h4 className="vertical-timeline-element-subtitle">'외대 솔로 탈출'이란?</h4>
                  <p>
                  외출, 풀어서 외대생 솔로탈출 프로젝트는 교내 유일 자치기구 훕스토리가 진행하는 프로젝트입니다. 각자가 작성한 이상형을 토대로 하여 이상형과 가까운 분을 매칭해드리는 블라인드 매칭 시스템입니다.
    1학기, 글로벌 캠퍼스에서만 530명이 조금 넘는 학우님들이 신청해주셨습니다
    그때 신청 못하신 분들, 그리고 서울 캠퍼스도 진행해달라고 해주신 학우님들의 요청에 힘입어 2학기에는 서울캠퍼스와 글로벌캠퍼스 모두 합쳐 외출 프로젝트를 진행하게 되었습니다!
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="How"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<DoneOutlineIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">매칭 방식</h4>
                  <p>
                  훕스토리의 외출 프로젝트는 14년도에 처음 시작되었습니다.
    몇 년 간 쌓인 내공으로 여러분들에게 더 잘 맞는 이성을 찾아드릴 수 있습니다.!
    1차적으로 컴퓨터 프로그램을 이용하여 우선순위를 선정하여 추립니다. 그 후 2차로는 프로그램을 거친 명단을 가지고 직접 비교 후 매칭하여 더 이상형에 가까운 분과 매칭 될 수 있도록 노력합니다.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="About"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">모집 일정</h4>
                  <p>
                    훕스토리 새로운 개발자 & 디자이너를 모집합니다. &nbsp;&nbsp;
                    <TimeLineA href="https://www.notion.so/hufstory/2020-7d64b4b8de4c416b9aa32b22580f8e12">Click Me!</TimeLineA>
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="November 13 2019"
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<EmojiEventsIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">외대솔로 탈출 마감</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="November 15 2019"
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<EmojiEventsIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">훕스토리 신입 팀원 모집 마감</h4>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<FavoriteIcon />}
                />
              </VerticalTimeline>
            </>
        );
    }
}

export default TimeLine;