import React, { useState, useEffect } from 'react';
import axios from "axios"

import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import "./study.css"
import $ from "jquery";
import { } from "jquery.cookie";
import { axiosInstance } from '../../config';

function Study() {
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "./my_model/";

    let model, webcam, labelContainer, maxPredictions;
    var total_studied = 0, prev_time, offset_time = 0;
    // Load the image model and setup the webcam


    // let check = true
    // console.log(check)
    var name = $.cookie("login_cookie")
    console.log(name)
    const [check, setCheck] = useState(true)
    const [time, setTime] = useState(0);
    const [id, setId] = useState("");
    // const { search } = useLocation();
    // const { search } = useLocation()
    // console.log(search)
    // console.log(location)
    // http://localhost:3000/posts/?user=kdyUpdated
    // {pathname: '/posts/', search: '?user=kdyUpdated', hash: '', state: undefined}
    useEffect(() => {
        // console.log(name)
        const fetchPosts = async () => {
            // const res = await axios.get("http://localhost:3000/api/posts");
            const res = await axiosInstance.post("/back/time/", {
                // const res = await axios.post("http://localhost:3000/back/time/", {
                username: name
            })
            console.log("hh")
            console.log(res.data[0])
            console.log(res.data[0].time)
            setTime(res.data[0].time)
            setId(res.data[0]._id)
            total_studied = res.data[0].time
            console.log("plz" + total_studied)
            // console.log(res)
            // setPosts(res.data);
            // {data: Array(3), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
            // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
            // data: (3) [{…}, {…}, {…}]
            // headers: {content-length: '581', content-type: 'application/json; charset=utf-8', date: 'Wed, 02 Feb 2022 21:56:18 GMT', etag: 'W/"245-nGaT93/POQnKQsl7TaP5icxjyF8"', x-powered-by: 'Express'}
            // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
            // status: 200
            // statusText: "OK"
            // [[Prototype]]: Object
        };
        fetchPosts();
    }, []);
    async function Submit() {
        try {
            const res = await axiosInstance.put("/back/time/submit", {
                // const res = await axios.put("http://localhost:3000/back/time/submit", {
                username: name,
                id: id,
                time: total_studied
            })
            console.log(res)
        } catch (err) {
        }
    }

    async function init() {
        // console.log("help")
        setCheck(!check)
        console.log(check)
        console.log("total" + total_studied)
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        prev_time = new Date();
        offset_time = new Date();

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);

        var cur_t = new Date();
        var diff_t = cur_t.getTime() - prev_time.getTime();
        prev_time = cur_t;

        if (prediction[0].className == "studying" && 0.9 < prediction[0].probability.toFixed(2)) {
            total_studied = total_studied + diff_t;
            // console.log(total_studied);

            var format_t = new Date(total_studied - 32400000);
            // console.log(total_studied)
            labelContainer.childNodes[0].innerHTML = "공부 중! 현재시각: " + cur_t.getHours() + "시 " + cur_t.getMinutes() + "분 " + cur_t.getSeconds() + "초 ";
            // labelContainer.childNodes[1].innerHTML = "누적 공부시간 : " + total_studied.toString();
            labelContainer.childNodes[1].innerHTML = "누적 공부시간: " + format_t.getHours() + "시간 " + format_t.getMinutes() + "분 " + format_t.getSeconds() + "초 ";
        } else if (prediction[1].className == "playing" && 0.9 < prediction[0].probability.toFixed(2)) {
            labelContainer.childNodes[0].innerHTML = "공부중이 아님.. 현재시각: " + cur_t.getHours() + "시 " + cur_t.getMinutes() + "분 " + cur_t.getSeconds() + "초 ";
        } else {
            labelContainer.childNodes[0].innerHTML = "공부중이 아님.. 현재시각:  " + cur_t.getHours() + "시 " + cur_t.getMinutes() + "분 " + cur_t.getSeconds() + "초 ";
        }
    }
    console.log(check)
    return (
        <div>
            <div className='passion'>
                <div>공부하기싫을때, 남들도 하기싫다.</div>
                <div>그때하는 것이 경쟁력이다.</div>
                <div id="webcam-container"></div>
                <div id="label-container"></div>
                <div className="btngroup">
                    {
                        check ? (<button type="button" onClick={init}>Start</button>)
                            : (<div></div>)
                    }
                    <button type="button" onClick={Submit}>기록저장</button>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
        </div>
    );
}

export default Study;