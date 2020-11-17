<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrganizerStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->organizer) {
            return [
                'name' => "required|unique:organizers,name,{$this->organizer->id}",
                'slug' => "required|unique:organizers,slug,{$this->organizer->id}",
                'description' => 'required|string|min:1|max:40000',
            ];
        }
        return [
            'name' => "required|unique:organizers,name",
            'slug' => "required|unique:organizers,slug",
            'description' => 'required|string|min:1|max:40000',
        ];
    }
}
