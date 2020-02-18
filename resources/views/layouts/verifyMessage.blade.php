@if (session('verify'))
    <div class="verify_bar">
        <div class="text">
            <p>Please take a minute to verify your account</p>
        </div>
        <div class="submit">
            <p>If you did not recieve an email </p>
            <form class="" method="POST" action="{{ route('verification.resend') }}">
                @csrf
                <button type="submit" class="another">{{ __('click here to request another') }}</button>.
            </form>
        </div>
    </div>
@endif