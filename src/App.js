import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

import moment from 'moment';
import * as api from './lib/api';

class App extends Component {

	state = {
		loading: false,
		maxDate: null,
		date: null,
		url: null,
		mediaType: null
	} 

	getAPOD = async (date) => {
		if (this.state.loading) return; // 이미 요청 중이라면 무시

		this.setState({
			loading: true // 로딩 상태 시작
		})

		try {
			const response = await api.getAPOD(date);
			
			// api에서 보내주는 json을 기준으로 비구조화 할당 (보내준 이름: 우리가 정의할 이름)
			const { date: retrievedDate, url, media_type: mediaType } = response.data;

			if (!this.state.maxDate) { // maxDate가 없으면
				this.setState({
					maxDate: retrievedDate // 나중에 다음 이미지를 보여주게 될 때, 오늘 이후의 데이터는 존재하지 않기 때문에 maxDate 를 설정
				})
			}

			// 전달 받은 데이터 넣어주기
			this.setState({
				date: retrievedDate,
				mediaType,
				url
			})

		} catch (e) {
			console.log(e);
		}

		this.setState({
			loading: false // 로딩 상태 종료
		})

		// api.getAPOD(date).then(response => {
		// 	console.log(response);
		// });
	}

	handlePrev = () => {
		const { date } = this.state;
		const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
		this.getAPOD(prevDate);
	}
	
	handleNext = () => {
		const { date, maxDate } = this.state;
		if (date === maxDate) return;
		const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
		this.getAPOD(nextDate);
	}

	componentDidMount() {
		this.getAPOD(); // 비워두면 default date = today 적용됨
	}

  render() {
		const {url, mediaType, loading} = this.state;
		const {handlePrev, handleNext} = this;

    return (
      <ViewerTemplate
				spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext}/>}
				viewer={
					<Viewer
						url={url} 
						mediaType={mediaType}
						loading={loading}
					/>
				}
      />
    );
  }
}

export default App;
