<?php

namespace App\Http\Controllers;

use App\Category;
use App\Event;
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
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::all();
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
        $validated = $request->validated();
        // if(Category::where('name', '=', $request->name)->exists()) { return '';}
        $category = Category::create($request->except(['imagePath']));
        $category->saveFile($request, $category, 600, 600);
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
            $query->where('approved', true);
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
    public function update(Request $request, Category $category)
    {
        if(Category::where('name', '=', $request->name)->exists()) { return '';}
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
     * Select the category page.
     *
     * @return \Illuminate\Http\Response
     */
    public function select(Event $event)
    {
        $categories = Category::all();
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
    * Fetches the categories list
    *
    * @return \Illuminate\Http\Response
    */
    public function add(Request $request, Event $event)
    {
        $event->update([ 'category_id' => request('id') ]);
    }
}
