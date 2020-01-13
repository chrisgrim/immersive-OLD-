@extends('layouts.master')

@section('content')
<div class="verify">
    <div class="">
        <div class="form">
            <div class="">
                <div class="welcome">
                    Please take a minute to 
                </div>
                <div class="login-header">
                    <h1> Verify Your Email</h1>
                </div>

                <div class="">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('A fresh verification link has been sent to your email address.') }}
                        </div>
                    @endif

                    {{ __('Before proceeding, please check your email for a verification link.') }}
                    {{ __('If you did not receive the email') }},
                    <form class="" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="another">{{ __('click here to request another') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
