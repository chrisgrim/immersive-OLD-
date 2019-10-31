<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class OrganizerUpdateRequest extends FormRequest
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
        return [
            'website' => ['required',
                            Rule::unique('organizers')
                                  ->ignore($this->id)
                        ],
            'name' => ['required',
                            Rule::unique('organizers')
                                  ->ignore($this->id)
                        ],
            'slug' => ['required',
                            Rule::unique('organizers')
                                  ->ignore($this->id)
                        ],
            'description' => 'required',
        ];
    }
}
