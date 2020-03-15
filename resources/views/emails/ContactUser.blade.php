<body style="margin:0px;">
    <div>
        <div align="center" style="background-image: url('https://ei.test/storage/website-files/email-message-top.jpg'); background-repeat: no-repeat; background-position: top center; background-size: cover;height:300px;width:100%;"></div>

        <div style="text-align: center;">
            <p>You have recieved a message from {{$attributes['username']}}.</p>
            <div style="background: #f1f1f1;
                padding: .35rem 2rem;
                display: inline-block;
                border: 1px solid black;
                border-radius: .4rem;
                width: 40%;">
                <p>{{$attributes['body']}}</p>
            </div>
            <div>
                <button>Check it out</button>
            </div>
        </div>
    </div>
</body>
