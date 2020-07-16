<?php

namespace App\Http\Controllers;

use App\Category;
use App\Event;
use App\MakeImage;
use Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryStoreRequest;

class CategoryController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified'])->except('show');
        $this->middleware('admin')->except('show', 'select', 'fetch', 'add');
        $this->middleware('can:update,event')->only('add','fetch','select');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return [
            'remote' => Category::all()->where('remote', 1),
            'location' => Category::all()->where('remote', 0),
        ];
        // return Category::all()->where('remote', 1);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adminArea.categories');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryStoreRequest $request)
    {
        $category = Category::create($request->except(['image']));
        $category->update(['slug'=> str_slug($request->name)]);
        MakeImage::saveImage($request, $category, 600, 600, 'category');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $category->load(['events' => function ($query) {
            $query->where('status', 'p')->with('organizer');
        }]);
        return view('categories.show',compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryStoreRequest $request, Category $category)
    {
        $category->updateElements($request, $category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->deleteCategory($category);
    }

    /**
     * Displays the User Event Creation Category Page
     *
     * @return \Illuminate\Http\Response
     */
    public function select(Event $event)
    {
        // if ($event->status < 2) { abort(403); }
        $categories = Category::all();
        $event->load('category');
        return view('create.category', compact('event','categories'));
    }

    /**
    * Fetches the categories list
    *
    * @return \Illuminate\Http\Response
    */
    public function fetch(Event $event)
    {
        $selectedCat = $event->category()->first();
        return $selectedCat;
    }

    /**
    * Updated the Event with the selected category ID
    *
    * @return \Illuminate\Http\Response
    */
    public function add(Request $request, Event $event)
    {
        $event->update([ 'category_id' => request('id') ]);

        //Checks to see if category has been selected then updates status to 3
        if ($event->status < 4 && $event->isInProgress() && $event->category_id) {
            $event->update([ 'status' => '3' ]);
        }
    }
}
