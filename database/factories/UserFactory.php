<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use App\Event;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/


$factory->define(User::class, function (Faker $faker) {
    $imagesave = $faker->image('public/storage/avatars',100,100, null, false);
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
        'avatar_path' => 'avatars/'. $imagesave,
        'image_path' => 'avatars/'. $imagesave,
    ];
});

$factory->define(App\Region::class, function (Faker $faker) {
    return [
        'region' => $faker->name,
    ];
});

$factory->define(App\Genre::class, function (Faker $faker) {
    return [
        'genre' => $faker->name,
    ];
});

$factory->define(App\ContactLevel::class, function (Faker $faker) {
    return [
        'level' => $faker->name,
    ];
});

$factory->define(App\Organizer::class, function (Faker $faker) {
    $imagesave = $faker->image('public/storage/organizer-images',100,100, null, false);
    $name = $faker->company;
    return [
        // 'user_id' => function () {
        //     return factory('App\User')->create()->id;
        // },
        'user_id' => factory('App\User'),
        'name' => $name,
        'slug' => str_slug($name),
        'description' => $faker->paragraph,
        'rating' => $faker->randomElement(['1', '5', '2', '3', '4']),
        'instagramHandle' => '@'. $name,
        'facebookHandle' => '@'. $name,
        'twitterHandle' => '@'. $name,
        'website' => $faker->url,
        'imagePath' => 'organizers/'. $imagesave,
    ];
});

$factory->define(App\Category::class, function (Faker $faker) {
    $imagesave = $faker->image('public/storage/category-images',100,100, null, false);
    $title = $faker->company;
    return [
        'name' => $title,
        'slug' => str_slug($title),
        'description' => $faker->paragraph,
        'imagePath' => 'category/'. $imagesave,
    ];
});

$factory->define(App\Location::class, function (Faker $faker) {
    return [
        'hiddenLocationToggle' => 'No',
        'hiddenLocation' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'home' => $faker->buildingNumber,
        'street' => $faker->streetName,
        'city' => $faker->city,
        'region' => $faker->state,
        'country' => 'US',
        'postal_code' => '94952',
        'longitude' => $faker->longitude($min = -180, $max = 180),
        'latitude' => $faker->latitude($min = -90, $max = 90),
    ];
});

$factory->define(App\Date::class, function (Faker $faker) {
    return [
        'event_id' => '1',
        'date' => $faker->datetime()->format('Y-m-d H:i:s'),
    ];
});

$factory->define(App\Event::class, function (Faker $faker) {
    $title = $faker->company;
    $eventimagesave = $faker->image('public/storage/event-large-images',1200,800, null, false);
    $thumbimagesave = $faker->image('public/storage/event-thumb-images',600,400, null, false);
    return [
        'user_id' => factory('App\User'),
        'organizer_id' => factory('App\Organizer'),
        'category_id' => factory('App\Category'),
        'name' => $title,
        'slug' => str_slug($title),
        'description' => $faker->paragraph,
        'largeImagePath' => 'event-large-images/'. $eventimagesave,
        'thumbImagePath' => 'event-thumb-images/'. $thumbimagesave,
        'approved' => $faker->randomElement(['1', '0']),
        'closingDate' => $faker->datetime()->format('Y-m-d H:i:s'),
    ];
});
